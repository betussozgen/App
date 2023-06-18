export default function (data) {
    return Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key],
        }
    })
        //date a göre sort

        .sort(function (a, b) {
            return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
        });
}
