// import { objectToQueryParams } from '../../helpers/params';
// import { baseApi } from './baseApi';
// import { expenseTags } from './tags';

// export const expenseApis = baseApi.injectEndpoints({
//   endpoints: builder => ({
//     getMyExpenses: builder.query({
//       query: params => `expense/my/list?${objectToQueryParams(params)}`,
//       providesTags: [expenseTags.EXPENSES],
//     }),

//     addExpense: builder.mutation({
//       query: body => ({
//         url: 'expense/newExp',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: [expenseTags.EXPENSES],
//     }),

//     expenseDetails: builder.query({
//       query: params => `expense/detail?${objectToQueryParams(params)}`,
//       transformResponse: (response: any) => response.expense,
//       providesTags: [],
//     }),

//     expenseOverview: builder.query({
//       query: () => `expense/overview`,
//       transformResponse: (response: any) => response.data,
//       providesTags: [],
//     }),

//     deleteExpense: builder.mutation({
//       query: body => ({
//         url: 'expense/delete',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: [expenseTags.EXPENSES],
//     }),
//   }),
// });

// export const {
//   useGetMyExpensesQuery,
//   useAddExpenseMutation,
//   useExpenseDetailsQuery,
//   useExpenseOverviewQuery,
//   useDeleteExpenseMutation,
// } = expenseApis;
