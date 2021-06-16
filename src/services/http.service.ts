import AxiosServ from './axios.service';

/* eslint-disable no-useless-constructor */
class HttpRequestService {
  constructor() { }

  loginUser(data: ICredentials) {
    const uri = '/user/login';
    return AxiosServ.postMethod(uri, data);
  }

  loginAdmin(data) {
    const uri = '/user/admin-login';
    return AxiosServ.postMethod(uri, data);
  }

  //client
  getAllMultipleChoice() {
    const uri = '/multiple-choice/all';
    // console.log(uri);
    return AxiosServ.getMethod(uri);
  }

  // admin
  getMultipleChoiceBaseType(idType, PageIndex, pageSize) {
    const uri = `multiple-choice/questions/${PageIndex}/${pageSize}/${idType}`;
    return AxiosServ.getMethod(uri);
  }
  getMultipleQuestionWithPaginator(page_size, page_index, question_type_id) {
    const uri = `/multiple-choice/questions/${page_size}/${page_index}/${question_type_id}`
    return AxiosServ.getMethod(uri)
  }
}

const httpServ = new HttpRequestService();

export default httpServ;
