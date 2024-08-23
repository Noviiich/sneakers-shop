import { computed } from 'vue'

export const useSortedItems = (items, filters) => {
    const sortedItems = computed(() => {
        if(filters.sortBy === 'name') {
            return [...items.value].sort((a, b) => a.title.localeCompare(b.title))
        }
        else if (filters.sortBy === '-price') {
            return [...items.value].sort((a, b) => b.price - a.price)
        }
        else if (filters.sortBy === 'price') {
            return [...items.value].sort((a, b) => a.price - b.price)
        }
        return items.value
    })

    return sortedItems
}

export const useItems = (items, filters) => {
    const sortedItems = useSortedItems(items, filters)

    const sortedAndSearchedItems = computed(() => {
        return sortedItems.value.filter(item => item.title.toLowerCase().includes(filters.searchQuery.toLowerCase()))
    })

    return sortedAndSearchedItems
}  