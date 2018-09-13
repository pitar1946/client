import React, {Component} from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Container
} from 'reactstrap';


class CreateProfile extends Component{
  constructor(){
    super();
    this.state = {

      modal: false,
      name:'',
      shortname:'',
      address:'',
      city:'',
      zip:'',
      country:'',
      email:'',
      contactPerson:'',
      about:'',
      description:'',
      adventages: ''
    }
  }


  onInputChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    });
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
      const newProfile = {
        name: this.state.name,
        shortname: this.state.shortname,
        address: this.state.address,
        city: this.state.city,
        zip: this.state.zip,
        country: this.state.country,
        email: this.state.email,
        contactPerson: this.state.contactPerson,
        about: this.state.about,
        description: this.state.description,
        adventages: this.state.adventages
      }

       this.setState({
                      name: '',
                      shortname:'',
                      address: '',
                      city: '',
                      zip: '',
                      country:'',
                      email:'',
                      contactPerson:'',
                      about:'',
                      description:'',
                      adventages:''
                    });
          console.log(newProfile)
          this.toggleModal();
        }

  render(){
    return(
       <div>
        <Container>
          <Button
           outline color="danger"
           style={{marginTop: '20px', marginBottom: '20px'}}
           onClick={this.toggleModal}
           >Create User
          </Button>
           <Modal isOpen={this.state.modal}>
             <ModalHeader  toggle={this.toggleModal}>Add To List</ModalHeader>
              <ModalBody>
              <Form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                        <Input
                           className='mb-3'
                           type='text'
                           name='name'
                           value={this.state.name}
                           placeholder='Name'
                           onChange={this.onInputChange}/>
                         <Input
                           className='mb-3'
                           type='text'
                           name='shortname'
                           value={this.state.shortname}
                           placeholder='Short Name'
                           onChange={this.onInputChange}/>
                        <Input
                           className='mb-3'
                           type='text'
                           name='address'
                           value={this.state.address}
                           placeholder='Address'
                          onChange={this.onInputChange}/>
                        <Input
                           className='mb-3'
                           type='text'
                           name='city'
                           value={this.state.city}
                           placeholder='City'
                           onChange={this.onInputChange}/>
                        <Input
                           className='mb-3'
                           type='text'
                           name='zip'
                           value={this.state.zip}
                           placeholder='Zip'
                           onChange={this.onInputChange}/>
                        <Input
                           className='mb-3'
                           type='text'
                           name='country'
                           value={this.state.country}
                           placeholder='Country'
                           onChange={this.onInputChange}/>
                        <Input
                           className='mb-3'
                           type='text'
                           name='email'
                           value={this.state.email}
                           placeholder='Email'
                          onChange={this.onInputChange}/>
                        <Input
                          className='mb-3'
                          type='text'
                          name='contactPerson'
                          value={this.state.contactPerson}
                          placeholder='Contact Person'
                          onChange={this.onInputChange}/>
                        <Input
                          className='mb-3'
                          type='textarea'
                          name='about'
                          value={this.state.about}
                          placeholder='About'
                          onChange={this.onInputChange}/>
                        <Input
                          className='mb-3'
                          type='textarea'
                          name='description'
                          value={this.state.description}
                          placeholder='Description'
                          onChange={this.onInputChange}/>
                       <Input
                          className='mb-3'
                          type='textarea'
                          name='adventages'
                          value={this.state.adventages}
                          placeholder='Adventages'
                          onChange={this.onInputChange}/>
                     </FormGroup>
                    <Button
                         className='btn btn-danger btn-sm float-right'
                          type='submit'
                          onSubmit={this.onFormSubmit}>Submit</Button>
                  </Form>
              </ModalBody>
           </Modal>
          </Container>
       </div>
    )
  }
}
export default CreateProfile;
