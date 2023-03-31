const splitStyles = styles => styles
    .split('\n')
    .reduce((result, line) => {
        const trimmedLine = line.trim();
        if (trimmedLine.length === 0) {
            // Empty line, start a new group
            result.push('');
        } else {
            // Add line to current group
            const currentGroup = result[result.length - 1];
            result[result.length - 1] = currentGroup + line + '\n';
        }
        return result;
    }, [''])
    .filter(group => group.trim().length > 0);

export default splitStyles