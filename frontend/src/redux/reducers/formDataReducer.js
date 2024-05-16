const formDataReducer = (state, action) =>
{
    switch (action.type)
    {
        case "UPDATE_FORM_DATA":
            return { ...state, [action.data.formName]: action.data.formData };
        case "RESET_FORM_DATA":
            return initialFormData;
        default:
            return state;
    }
};

export default formDataReducer;