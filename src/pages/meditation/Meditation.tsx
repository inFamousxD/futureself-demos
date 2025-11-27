import React, { useState } from "react";
import {
    PageStyled,
    PageTitle,
    FormContainer,
    FormGroup,
    Label,
    Input,
    TextArea,
    Button,
    ScriptContainer,
    ScriptTitle,
    ScriptText,
    AudioContainer,
    LoadingText,
} from "./Meditation.styles";
import {
    createMeditationScript,
    generateMeditationAudio,
    type CreateScriptRequest,
} from "../../services/meditationService";
import Spacer from "../../common/Spacer";

const Meditation = () => {
    const [formData, setFormData] = useState<CreateScriptRequest>({
        vision: "",
        proud_statement: "",
        meditation_prompt: "",
        feeling_input: "",
        length_minutes: 5,
    });

    const [script, setScript] = useState<string>("");
    const [audioUrl, setAudioUrl] = useState<string>("");
    const [voiceId, setVoiceId] = useState<string>("ybHawyVJhBsEHkg0UBrC");
    
    const [isLoadingScript, setIsLoadingScript] = useState<boolean>(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "length_minutes" ? parseInt(value) || 0 : value,
        }));
    };

    const handleGenerateScript = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoadingScript(true);
        setScript("");
        setAudioUrl("");

        try {
            const response = await createMeditationScript(formData);
            setScript(response.script);
        } catch (error) {
            console.error("Error generating script:", error);
            alert("Failed to generate meditation script. Please try again.");
        } finally {
            setIsLoadingScript(false);
        }
    };

    const handleGenerateAudio = async () => {
        if (!script) return;

        setIsLoadingAudio(true);
        setAudioUrl("");

        try {
            const response = await generateMeditationAudio({
                script,
                voice_id: voiceId,
            });
            setAudioUrl(response.audio_url);
        } catch (error) {
            console.error("Error generating audio:", error);
            alert("Failed to generate meditation audio. Please try again.");
        } finally {
            setIsLoadingAudio(false);
        }
    };

    return (
        <PageStyled>
            <PageTitle>Meditation</PageTitle>

            <FormContainer>
                <form onSubmit={handleGenerateScript}>
                    <FormGroup>
                        <Label htmlFor="vision">Vision</Label>
                        <Input
                            type="text"
                            id="vision"
                            name="vision"
                            value={formData.vision}
                            onChange={handleInputChange}
                            placeholder="Enter your vision..."
                            autoComplete={"false"}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="proud_statement">Proud Statement</Label>
                        <TextArea
                            id="proud_statement"
                            name="proud_statement"
                            value={formData.proud_statement}
                            onChange={handleInputChange}
                            placeholder="What are you proud of?"
                            autoComplete={"false"}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="meditation_prompt">Meditation Prompt</Label>
                        <TextArea
                            id="meditation_prompt"
                            name="meditation_prompt"
                            value={formData.meditation_prompt}
                            onChange={handleInputChange}
                            placeholder="Enter your meditation focus..."
                            autoComplete={"false"}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="feeling_input">How are you feeling?</Label>
                        <Input
                            type="text"
                            id="feeling_input"
                            name="feeling_input"
                            value={formData.feeling_input}
                            onChange={handleInputChange}
                            placeholder="Describe your current feeling..."
                            autoComplete={"false"}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="length_minutes">Length (minutes)</Label>
                        <Input
                            type="number"
                            id="length_minutes"
                            name="length_minutes"
                            value={formData.length_minutes}
                            onChange={handleInputChange}
                            min="1"
                            max="60"
                            required
                        />
                    </FormGroup>

                    <Button type="submit" disabled={isLoadingScript}>
                        {isLoadingScript ? "Generating Script..." : "Generate Script"}
                    </Button>
                </form>
            </FormContainer>

            {isLoadingScript && <LoadingText>Creating your personalized meditation script...</LoadingText>}

            {script && !isLoadingScript && (
                <ScriptContainer>
                    <ScriptTitle>Your Meditation Script</ScriptTitle>
                    <ScriptText>{script}</ScriptText>

                    <FormGroup>
                        <Label htmlFor="voice_id">Voice ID</Label>
                        <Input
                            type="text"
                            id="voice_id"
                            name="voice_id"
                            value={voiceId}
                            onChange={(e) => setVoiceId(e.target.value)}
                            placeholder="Enter voice ID..."
                        />
                    </FormGroup>

                    <Button onClick={handleGenerateAudio} disabled={isLoadingAudio}>
                        {isLoadingAudio ? "Generating Audio..." : "Generate Audio"}
                    </Button>

                    {isLoadingAudio && (
                        <LoadingText>Converting script to narrated audio...</LoadingText>
                    )}

                    {audioUrl && (
                        <AudioContainer>
                            <ScriptTitle>Your Meditation Audio</ScriptTitle>
                            <audio controls style={{ width: "100%" }}>
                                <source src={audioUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <p style={{ marginTop: "10px", fontSize: "12px" }}>
                                Audio URL: <a href={audioUrl} target="_blank" rel="noopener noreferrer">
                                    {audioUrl.length > 100 ? `${audioUrl.substring(0, 100)}...` : audioUrl}
                                </a>
                            </p>
                        </AudioContainer>
                    )}
                </ScriptContainer>
            )}
            <Spacer height={300} />
        </PageStyled>
    );
};

export default Meditation;