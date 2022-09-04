export const baseUrl = "https://what-happen.com/api";

export const createBoardUrl = `${baseUrl}/board`;
export const createRetrospectiveUrl = (id) => `${baseUrl}/board/${id}/retrospective`;
export const deleteRetrospectiveUrl = (id) => `${baseUrl}/retrospective/${id}`;
