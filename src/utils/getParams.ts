export const getParams = (page: string, category: string) => {
    if (page === '' && category !== '') return `?category=${category}`;
    else if (page !== '' && category === '') return `?page=${page}`;
    else if (page !== '' && category !== '') return `?page=${page}&category=${category}`
    else return '';
 }