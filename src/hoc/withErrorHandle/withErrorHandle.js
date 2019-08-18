import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandle = (WrrapedComponent,axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
          this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({
                    error: null
                });
                return req;
            });
          this.reqInterceptor  = axios.interceptors.response.use(res=> res, error => {
                this.setState({error: error});
            });
        }
        //Removing Old Interceptors
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }
        errorConfirmHandler = () =>{
            this.setState({error: null});
        }
        render(){
            return (
                <>
                    <Modal show = {this.state.error}
                          modalClosed = {this.errorConfirmHandler}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrrapedComponent {...this.props} />
                </>
            )
        }
    }
}
export default withErrorHandle;