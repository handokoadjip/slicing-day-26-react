import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import { Navbar, SectionContent, Footer } from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Plastic Creative | Portfolio › Nanimarquina";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionContent />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
