export default function validateNote(formData) {
    if (!formData.title.trim()) {
        return false;
    }
    if (formData.content.length > 1000) {
        return false;
    }
    
    return true;
}
