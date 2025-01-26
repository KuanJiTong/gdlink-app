import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/groups/members';

const GroupMemberService = {
    async getMemberList(groupId){
        try {
            const response = await axios.get(`${API_BASE_URL}/${groupId}`);
            return response.data;
        } catch (error) {
            console.error('Error retrieving members:', error);
        }
    },
    async addMember(groupId,memberEmail){
        try {
            const response = await axios.post(`${API_BASE_URL}/${groupId}/add`,{
                memberEmail: memberEmail
            });
            return response.data;
        } catch (error) {
            console.error('Error adding member:', error);
        }
    },
    async removeMember(groupMemberId){
        try {
            const response = await axios.delete(`${API_BASE_URL}/${groupMemberId}/delete`);
            return response.data;
        } catch (error) {
            console.error('Error removing member:', error);
        }
    },
};

export default GroupMemberService;
