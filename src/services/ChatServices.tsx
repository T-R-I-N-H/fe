import { instance } from '@/lib/axios';

type Response = {
    action: 'modify_diagram' | 'answer_question';
    data: string;
    answer: string;
};

type Conversation = {
    diagramId: string;
    messages: {
        sender: string;
        message: string;
        timestamp: number;
    }[];
};

const ChatServices = {
    async sendMessage(message: string, diagramId: string): Promise<Response> {
        try {
            const response = await instance.post('/conversation', {
                prompt: message,
                diagram_id: diagramId,
            });
            return response.data.data;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    },
    async getConversation(diagramId: string): Promise<Conversation> {
        try {
            const response = await instance.get(`/conversation/${diagramId}`);
            return response.data?.data || response.data;
        } catch (error) {
            console.error('Error fetching conversation:', error);
            throw error;
        }
    },
};

export default ChatServices;
