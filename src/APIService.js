export default class APIService {
    static async InsertOrder(body) {
        const resp = await fetch(`http://127.0.0.1:8000/api/v1/orders/`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return await resp.json()
    }
}