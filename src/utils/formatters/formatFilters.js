const formatFilters = (filters) => {
    let formattedFilters = '';

    for (const [i, [key, value]] of Object.entries(filters).entries()) {
        if (formattedFilters === '') {
            formattedFilters = `filter[${i}]=${key}&value[${i}]=${value}`;
            continue;
        }

        formattedFilters =
            formattedFilters + '&' + `filter[${i}]=${key}&value[${i}]=${value}`;
    }

    return formattedFilters;
};

export default formatFilters;
