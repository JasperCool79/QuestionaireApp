const clearData = (data) => {
    data.personal_info.first_name = '';
    data.personal_info.last_name = '';
    data.personal_info.email = '';
    data.gender = '';
    data.age = '';
    data.country_info = [];
    data.spicy_info = 0;
}
export default clearData;
