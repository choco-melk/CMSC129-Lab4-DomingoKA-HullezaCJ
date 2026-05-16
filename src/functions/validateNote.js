const MAX_CONTENT_LENGTH = 1000;

export default function validateNote(note) {
    return (note.title.trim() != "" && note.content.length < MAX_CONTENT_LENGTH);
}
