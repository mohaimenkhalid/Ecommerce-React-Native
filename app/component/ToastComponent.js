
export const success = (toast, title, description = '') => {
    toast.show({
        title: title,
        status: "success",
        description: description,
    })
}
