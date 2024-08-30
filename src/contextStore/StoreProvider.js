import React, { Component } from 'react';
// Set Up The Initial Context
export const StoreContext = React.createContext();
// Create an exportable consumer that can be injected into components
export const StoreConsumer = StoreContext.Consumer;
export class StoreProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDetail: {
        name: '',
        email: '',
        phone: '',
        streetName: '',
        city: '',
        state: '',
      },
      updateCustomerDetail: (updateCustomer) =>
        this.updateCustomerDetail(updateCustomer),
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* value prop is where we define what values 
             that are accessible to consumer components */}
        <StoreContext.Provider
          value={{
            customerDetail: this.state.customerDetail,
          }}
        >
          {this.props.children}
        </StoreContext.Provider>
      </>
    );
  }
}

export default StoreProvider;
