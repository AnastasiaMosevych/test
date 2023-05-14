export const selectUsers = state => {
    return state.users.users;
}

export const selecIsLoading = state => {
    return state.users.isLoading;
}

export const selectIsUpdating = state => {
    return state.users.isUpdating;
}

export const selectPage = state => {
    return state.users.page;
}

export const selectLoadMore = state => {
    return state.users.loadMore;
}

export const selectSubscription = state => {
    return state.subscription.subscribedUsers;
}