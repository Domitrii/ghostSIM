import { instance } from './authApi';

export const dailyRecord = async (query) => {
    try{
        const params = { day: query };
        const { data } = await instance.get("api/track/day", { params });
        console.log(data)
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || 'An error occurred');
    }
};

export const monthlyRecord = async (query) => {
    const params = { month: query };
    const { data } = await instance.get("api/track/month", { params });
    console.log(data)
    return data;
};

export const addWaterRecord = async (body) => {
    try{
        const {data} = await instance.post("api/track", body);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message || 'An error occurred');
      }
};

export const updateWaterRecord = async (id, amount, time) => {
    const { data } = await instance.put(`api/track/${id}`, { amount, time });
    return data;
};

export const deleteWaterRecord = async (id) => {
    const { data } = await instance.delete(`api/track/${id}`);
    return data;
};
