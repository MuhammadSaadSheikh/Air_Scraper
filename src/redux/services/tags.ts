export const expenseTags = {
  // EXPENSES: 'EXPENSES',
  USER: 'USER',
};

export const tagTypes = (): string[] =>
  [...Object.values(expenseTags)] as string[];
