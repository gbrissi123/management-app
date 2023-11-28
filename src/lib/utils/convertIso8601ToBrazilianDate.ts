export function convertIso8601ToBrazilianDate(iso8601Date: string): string {
    // Parse ISO 8601 date
    const date = new Date(iso8601Date);

    // Define options for formatting
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo', // Set the time zone to Brazilian time
    };

    // Format the date in Brazilian format
    const brazilianDate = date.toLocaleString('pt-BR', options);

    return brazilianDate;
}