
export default (req, res, next) => {
    res.body = getPagingData(res.data, res.page, res.limit);
    console.log(res.body);
    res.send(res.body)
}


const getPagingData = (data, page, limit) => {
    // const { rows: products } = data;
    const currentPage = page ? +page : 0;
    // const totalPages = Math.ceil(totalItems / limit);

    return { data, currentPage };
};