function titleCase(str: string): string {
  if (str.length === 0) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

function toLowerCase(str: string): string {
  return str.toLowerCase();
}

function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

function truncateString(str: string, length: number): string {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
}

function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

function containsSubstring(str: string, substring: string): boolean {
  return str.includes(substring);
}

function kebabCase(str: string): string {
  return str
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

function snakeCase(str: string): string {
  return str
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .toLowerCase();
}

function repeatString(str: string, count: number): string {
  return str.repeat(count);
}

export function useStringHelper() {
  return {
    titleCase,
    toUpperCase,
    toLowerCase,
    capitalizeWords,
    reverseString,
    truncateString,
    isEmpty,
    containsSubstring,
    kebabCase,
    snakeCase,
    repeatString,
  };
}
