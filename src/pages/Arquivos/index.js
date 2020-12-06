import React from "react";
import PropTypes from "prop-types";
import _Page from "../_Page";
import axios, {post} from 'axios';
import { Component } from 'react';
import MemberInfoService from "../../services/MemberInfoService";
import Header from "../../components/Header";
import {JSEncrypt} from 'jsencrypt';
import {UploadOutlined, InboxOutlined} from "@ant-design/icons";

import "./styles.css";

import {
  Upload,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Layout,
  notification
} from "antd";
// import from "@ant-design/icons";

const {Content} = Layout;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

export default class SubmitComponent extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = MemberInfoService;
  state = {
    model: {}
  };

  componentDidMount() {
    this.getModel();
  }

  handleSubmit = e => {
    // e.preventDefault();
    MemberInfoService.save(e, "ID").then(response => {
      this.update({model: response.data});
      notification.open({
        message: "Sucesso!",
        description: "Suas alterações foram salvas com sucesso."
      });
      this.props.history.push("/")
    });
  };

  constructor(props){
    super(props);
    this.state = {
        image: ''
    }
}


    
    onChange(e){
        let files =e.target.files;
        let reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(e)=>{
            // 2520 : 1:31.27
            // 5010 : 1:17.26
            // 25200: 1:16.85
            // 50100 : 1:16.08
            // 100200 : 1:14.52
            // 150300 : 1:12.89 1:17.37
            // 200400 : 1:14.55
            var chunkData = e.target.result.match(/.{1,150300}/g);
            var accData = "";
            chunkData.forEach(element => {
                element.match(/.{1,501}/g).forEach(chunckedData=> {
                        // chunckedData.forEach(
                            // rechunkedData=>{
                                accData+= this.encryptMessage(
                                    chunckedData,                                                                                                                                                                                                                             

                                    `-----BEGIN RSA PRIVATE KEY-----
                                    MIIJKgIBAAKCAgEAvQq+1cnsjqLgBO0M5B6WIVmQhd4znSoDvMK2dnG5WtgD/oFU
                                    jzjXb2NUPfFAVW42KTOscReKKb9YMjtIZhO1Xxf48QE0sYEahiPiMSmHmALTvNhg
                                    DBL/MsOz9k0SjxrrqVZ4d0ACYkuRltgG33eeI6sE6I6GJyXtIzyNpZxBkSS2MO3g
                                    Il6ipUnWM/dDV4nnqiayGJfJ7oWCB8HjMdHmjV5O0Yqk0nb5dve+U/WB+5kFgfhw
                                    Bxr4sACYGXLUa47T1U+2yxIgjKtz2R9t2WV0MkTVvjqGFH2JZf2Vn/SlcvjPh48u
                                    ZPgapdYaR6QilNjz2ccemhRWjP5MtU5zJHNIYw5fYEQTNT7o1kP/sDdCWK1HelMH
                                    jR4ccFv6Un72aaXKHIE/I6ABtdhlkmmbYwdQ4fi71f2lVgxbJJ3mTXgiMFOtJB7+
                                    OQM9TngsFTzF31JLy1KUQ8zWzD5ZIIIxosvsg+wfjTLrEVRIvl9S0vKrHS0V28F/
                                    u7ET1S9y1/hMklX50SRqw86jW4dH21O1Bvc0u50X/XwlRPgb91Q1B3mpui/t5aMr
                                    a/PoZwaoFm16xQ8CjQhVA0rmTmd7zEg/oVlv+9dF/KwPld0ZFvy2SuwnNEtIoFiZ
                                    LBH7WjJmJ/eKzG2mpGYzCLJ09rJPIhvcXnWWcKdFQx4GWB1O2D2DeIfLOnsCAwEA
                                    AQKCAgA8HPaiNRusH87swhSfVbqX0EtMxmPTTlDx7VjoQTGX2akrfSTOhly7ZvKa
                                    3+R9Rhai83OaYsnkjJwXHRLgotPB8XWP7bo717n/fdmnmHUtuXhrTML+E+xi0Cih
                                    4dBNAVp+9qhIA2q+pxkcxoUo+ninDvL4oJm4SS8nTVIdn5qZ9PqahIoJY96EgP5E
                                    eBRJ+ehZCwUHHP1xg7LdlKISbZTKz3pw142h/4NEeXNkb2VuBDLkKYQ2PjVmgknb
                                    jdBOg5SI+FhAKvt+v+aO3Jep0cEpWwo8+483ZNQUQpcZzknuTYBwsu8l3F9c7MBe
                                    l6sHehXQ4qiwhlcfbp4l6VRj+uTBTx7oG76sdhFOcL+bx/Qxigm+940D/xEePu8s
                                    /+//u3U9vfTqItlktMWOO8FZoz5yY5MGhazGUnWXCoj/P+MgyJ0TUh5bVCiBN5S2
                                    sVLbMbOVpI51+GP6rrmJKLon1tHZS5Kkm8o8gAKWpcf7sOSS1YJAunYyjqfgDD83
                                    Gcrb+VbhWDChRmPN4vre2o3vh4IQywq1mm+7/XN7c4vviQ+YGBqFe8q7Xd3nozvg
                                    LJ00X2K3K/gpxfWbSZ3+M3zt/UOGC5M0ljhe3fFyjE+3DMMPmquvtRqqkmrMlXSH
                                    gXOYmjt5+F7aijZ615BtEL681VXLn8Zx+nkzsr4RADaKp8tXwQKCAQEA3aJOe1Vt
                                    W527Ct9tbxSFYF9uWn/cPoK1CnEI6kyWfXlDgzj3Kbvq9U0lezf6dNuOMMjEkNJP
                                    77J2LLdyAwLi5nqF9oVoxl6kSWqVWfrYwmc5HvQfeUCONqmA0IKC5BauacfGcNhK
                                    xSFXUrbCrlL+BmLZ2iL/HPYwrTHUIoQer7jGDp6Aa+QsCgYoj+YXAQlMLFhMPK7a
                                    K85mTjJXkO6EcGFFhgE8GHNGT6hL4mXPJdJv5t7qa/CokVTdsKTuSXUnYtK/+pQ1
                                    RUqBqvTDYkawo0ha9EXNM2UzmSJvzau6tW/MzGT4G1Eq/sDTetgGwwGkB389d3KX
                                    NogjLJyi9uOs9QKCAQEA2lq1RvAxLYQ+3u+PcJ5UQXdqAHDyRdbj54goeUg+huQk
                                    uJxuZ+Gog6UdaaCQ59sqraTqZvxY9xIcA7T6NLl73Q7lg4zLSxJ8lUeQhKEB/E1v
                                    m6VRvhcjXW0YPyflB0MDbyGgQSdox5LUt4W80qO+6rDE0Y8Wu7CTdP8IcQeR9s1x
                                    Gn2gj2X/8LezfAKzji1+znUxoH2DGx/Cqb13JPupnYPPgIQEtU/pxDkKzrnAZOye
                                    RulM4VNiblxL1ayRIaZ4reyaCOI0yL4qbSVubJDcISF1PazmnqS1Fzx8C6ng56E4
                                    QPTYwiuxlb05fGmw+jCMrbPrGxbfHvdnjNQ5ueijrwKCAQEAndfD8Q5MDd1tojax
                                    J1UEEDimzQkWf+ZyrPcHlGXrH31HWaMuU6ijkwPYV8LsOmFLCO9THpjJmToN85bK
                                    Od7KXb6QvZsRnYU1l5uythxyVzFQevz9lUsmfUOGm/j24x5MJMXETAWeanpuSFgk
                                    miY9B6tK35HhAm1LCW3dWJ+jgx4i37J+X1hnDNSJ+sGxTGmkuEhCM02Lz3r1XWd4
                                    +Z0E8Uw1SVSDyh3+yyhesuQy/Qq76z6C0VDZnHdGU1GC6wnmfPj/BKScs7Z2Vpxu
                                    sgUKM5+KN0Gm/J1se/kMivtsw17WChM2p63M4xXNB0XmuubmPPife/w+OPYHpvP/
                                    E7neKQKCAQEAtdMk8r5eZSWjaOcZjdD6Hk2+4kErLYbk3s8dzOig0Ji4D1aMBUr+
                                    lSjwVh3TrI5veotCeaGWv56/30Jbu33dK9YUvreGLaxmO7SNHjQowB0HXBeM+vqv
                                    g0OuFiE1cReXi3n3xWl4sf+NzIi8FLcv6qRqMIqzhnViROF9+Qkxvc+TaFjGU8K/
                                    HocKGbDyLemql2c1fQwnGXYYFlpkFVLPChBRwRWuCgFSiwho/H3nPONgZXIuh890
                                    vqtypqp9bAUApuvH1K/w/lyEXcD2s8bo11nSFBqfK+nBtmiybs/2LUut2UFKIl5a
                                    EXOxo+0q5xt4ecjBdRxVjaa8/qNWsn2LlwKCAQEAtb8gBaJRltVz0jqAtgeoYSgv
                                    q6aWuH+g7pHidmRWKRNrDJX2HRvl+FPML8VFxuEaMPZXeyiAUoGAVu9a4BsugRkL
                                    0nQd6zEPQOmLNpi8nNGsP6DdieD6v8oPWXZZ2CMSbq6hRG73LfNPDLxBLvq7qH6r
                                    lEbgkuQNC60zOr/z74/JV0LD5t5g4m+y+69RXzX6M4GYM3LAgbAo8HS/0peEhOiA
                                    YxH6FxKcQEUKkIy7b+hF3BgboH+ZBNDzbTd7qmAUSYPSeDwzsMXF0h8a7mGvAvCW
                                    Q6Rdli9DgpuhUa8XXIPcLSbDGZ6NVnovbrfkUxMHr3mRKXgrdU1SZOcsyWYPRw==
                                    -----END RSA PRIVATE KEY-----`
                                    
                                    
                                    
                                    
                                );
                                this.addData(accData);
                                accData = "";
                            // });
                    });

                    
            });
                console.log("finish");
            
            }
           
        }
        
        addData = (text)=>{
            const url = "http://192.168.5.113/decrypt.php";
            const formData = {file: text, filename: "envioDoReact"};
            post(url, formData).then(
                response=>console.warn("result", response)
            );
            
        }

        downloadTxtFile = () => {
            const element = document.createElement("a");
            const file = new Blob([document.getElementById('agf').innerHTML],    
                        {type: 'text/plain;charset=utf-8'});
            element.href = URL.createObjectURL(file);
            element.download = "myFile.txt";
            document.body.appendChild(element);
            element.click();
            console.log(document.getElementById('agf').innerHTML);
          }

      encryptMessage(message, privateKey) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(privateKey);
        return jsEncrypt.encrypt(message);
      }
  render() {
    return (
        <>
        <Layout style={{backgroundColor: "white"}}>
              <Header/>
              <Content className={"card-arquivos"}></Content>
    
          <Upload className={"upload-drag"} directory>
  
            <Button icon={<UploadOutlined/>}>Insira um arquivo ou Diretório</Button>
          </Upload>
          <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
          </Layout>
        </>
    );
    // return (
    //   <>
    //     <Layout style={{backgroundColor: "white"}}>
    //       <Header/>
          
    //       <Content className={"card-criptografia"}>
    //              <div onSubmit={this.onFormSubmit}>
    //      <label for="files" class="btn" id="inputFile" >Select Image</label>
    //     <input id="files"  type="file" name="file" onChange={(e)=>this.onChange(e) }/>
    //     </div>
    //              <div id="agf" style={{margin:"50px 50px 50px 50px", backgroundColor: "gray", fontSize: "1"}} value="teste"></div>
    //     <Button type="primary" htmlType="submit" onClick={this.downloadTxtFile}>
    //               Submit
    //             </Button>
    //     </Content>
       
    //     </Layout>
    //   </>
    // );
  }
} 







// class Submit_Component extends Component{
  

            
// render(){
// return(
//     <Card >
//         <CardHeader><h1>Arquivos</h1></CardHeader>
//         <CardBody >
//         <div onSubmit={this.onFormSubmit}>
//         <label for="files" class="btn" id="inputFile" style={{
//               borderStyle:"dashed", 
//               borderColor: "blue",
//               margin:"10% 0% 0% 5%",
//               padding:"50px 40% 50px 40%",
//               color: "blue"
//         }}>Select Image</label>
//         <input id="files" style={{margin:"50px 50px 50px 50px", color: "white", backgroundColor: "white", visibility:"hidden"}} type="file" name="file" onChange={(e)=>this.onChange(e) }/>
//         </div>

//         <div className="example" style={{margin:"50px 20% 50px 0%"}}>

    

        
//         <Button  style={{margin:"50px 50px 50px 50px"}}>
//         Enviar criptografado
//         </Button>
//         <Button outline style={{margin:"50px 50px 50px 50px"}} >
//         Enviar sem criptografia
//         </Button>
//         <Button  outline theme="secondary" style={{margin:"50px 50px 50px 50px"}} onClick={this.downloadTxtFile}>Baixar o arquivo</Button>  
//         </div>
//         <div id="agf" style={{margin:"50px 50px 50px 50px", backgroundColor: "gray", fontSize: "1"}} value="teste">
//         </div>
 
//         </CardBody>
//     </Card>
//     )
        

//     }


//     encryptMessage(message, privateKey) {
//         const jsEncrypt = new JSEncrypt();
//         jsEncrypt.setPublicKey(privateKey);
//         return jsEncrypt.encrypt(message);
       
        
//       }
// }


