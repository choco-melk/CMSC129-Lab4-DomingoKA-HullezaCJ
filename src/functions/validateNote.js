const MAX_CONTENT_LENGTH = 1000;

export default function validateNote(formData) {
    return (formData.title.trim() != "" && formData.content.length < MAX_CONTENT_LENGTH);
}
