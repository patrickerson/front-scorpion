import API from "./api";

export default class CalcService {
    static async getAll(params) {
        return await API.get(`/member_info`, { params });
    }

    static async get(id) {
        return await API.get(`/member_info/${id}`);
    }

    static async create(data) {
        return await API.post(`/member_info`, data);
    }

    static async update(id, data) {
        return await API.put(`/member_info/${id}`, data);
    }

    static async delete(id) {
        return await API.delete(`/member_info/${id}`);
    }

    // identifica se precisa de uptade ou create
    static async save(data, idAttribute = "id") {
        const id = data[idAttribute];

        let url = "/member_info";
        let method = "post";

        if (id) {
            url += `/${id}`;
            method = "put";
        }

        return await API[method](url, data);
    }
}
