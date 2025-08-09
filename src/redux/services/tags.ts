export const expenseTags = {
  USER: 'USER',
};

export const tagTypes = (): string[] =>
  [...Object.values(expenseTags)] as string[];
