import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import Avatar from '@material-ui/core/Avatar';

class SamplePage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
        <div className="d-flex justify-content-center">
          <h1><IntlMessages id="pages.samplePage.description"/></h1>
          <Avatar className="bg-primary size-100"><h1 className="m-0 text-white">DK</h1></Avatar>
        </div>

      </div>
    );
  }
}

export default SamplePage;