export function useGetExpenses() {
    return [
        {
            number: 1,
            cols: {
                name: "Żabka",
                date: (new Date(2021, 12, 9)).toLocaleDateString(),
                category: "Groceries",
                cost: 24.34
            }
        },
        {
            number: 2,
            cols: {
                name: "Biedra",
                date: (new Date(2021, 12, 7)).toLocaleDateString(),
                category: "Groceries",
                cost: 29.34
            }
        }
    ]
}