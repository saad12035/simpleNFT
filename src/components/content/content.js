import {Row, Col, Image} from 'antd';
import './content.css';
import SimpleAccordion from "../acordian/acordian";

function ContextBody() {
  return (
      <div className="content">
        <Row>
          <Col span={12}>
            <div className="hero-title">
              <div className="row">
                <h1>LOOKSDAO'S VISION</h1>
                <h2>vision is to create NFT portfolio without spending the mint funds.
                  This is<br/> achieved by leveraging LooksRare staking. Aim is to raise
                  1M $looks<br/> and stake them to get sizable wETH rewards for acquiring blue chip<br/> NFTs.
                </h2>
                <h2 style={{marginTop: 30}}>
                  <Image
                      preview={false}
                      style={{marginRight: 20, width: 15, height: 15}}
                      src={require('../../images/Rectangle 47.png')}
                  /> Preserve DAO member’s membership cost<br/>
                  <Image
                      preview={false}
                      style={{marginRight: 20, width: 15, height: 15}}
                      src={require('../../images/Rectangle 47.png')}
                  />
                  Constant source of revenue for the DAO<br/>
                  <Image
                      preview={false}
                      style={{marginRight: 20, width: 15, height: 15}}
                      src={require('../../images/Rectangle 47.png')}
                  />
                  Ability to withdraw from the DAO<br/>
                  <Image
                      preview={false}
                      style={{marginRight: 20, width: 15, height: 15}}
                      src={require('../../images/Rectangle 47.png')}
                  />
                  Slow & steady growth<br/>

                </h2>
                <Row>
                  <Col span={10}>
                    <div className="button">
                      <h3>LORUM IPSUM</h3>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="button2">
                      <h3>LORUM IPSUM</h3>
                    </div>
                  </Col>

                </Row>

              </div>
            </div>
          </Col>
          <Col span={10} offset={2}>
            <div className="second-background">
              <Image
                  preview={false}
                  style={{marginLeft: 100, width: 320, height: 320, marginTop: 150}}
                  src={require('../../images/Screenshot 2022-02-20 013059.png')}
              />
            </div>

          </Col>
        </Row>
        <div className="exp">
          <Row>
            <Col span={10}>
              <div className="test">
                <Image
                    preview={false}
                    style={{marginLeft: 100, width: 320, height: 320, marginTop: 150}}
                    src={require('../../images/Screenshot 2022-02-20 013059.png')}
                />
              </div>

            </Col>
            <Col span={10} offset={3}>
              <div className="hero-title2">
                <div className="row">
                  <h1 style={{color: "black", fontWeight: "bold", marginTop: 50}}>How it works?
                  </h1>
                  <h2>Total membership: 1000<br/>
                    Cost: 1000 $looks/membership<br/>
                    Restriction: 5 membership/wallet<br/>

                  </h2>
                  <h2 style={{marginTop: 30}}>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 1.png')}
                    />Initial treasury : 1M $looks token.<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 1.png')}
                    />
                    95% of mint funds are allocated to the DAO.<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 1.png')}
                    />
                    Stake & compound looks token and earn wETH rewards.<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 1.png')}
                    />
                    Use wETH rewards to acquire NFTs for the DAO.<br/>


                  </h2>
                  <Row>
                    <Col span={10}>
                      <div className="button3">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>
                    <Col span={10}>
                      <div className="button2">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>

                  </Row>

                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className="exp2">
          <Row>
            <Col span={11}>
              <div className="hero-title3">
                <div className="row">
                  <h1>Aiming to solve some key NFT DAO problems</h1>
                  <h2 style={{marginTop: 30}}>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    /> Treasury funds in looks are never depleted, instead it keeps on compounding.<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    />
                    DAO does not rely on trading of its membership for royalties and revenue. Constant source of revenue
                    is via wETH rewards<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    />
                    Gives the ability for the members to withdraw from the DAO (after certain period of time). As 1
                    LooksDAO membership will always be equal to 1000 Looks token
                    which is preserved and compounded.<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    />
                    The canceled membership will be burned, thus reducing the DAO size and increasing the percentage
                    share of each member.


                  </h2>
                  <Row>
                    <Col span={10}>
                      <div className="button3">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>
                    <Col span={10}>
                      <div className="button4">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>

                  </Row>

                </div>
              </div>
            </Col>
            <Col span={13}>
              <div className="third-background">
                <Image
                    preview={false}
                    style={{marginLeft: 100, width: 320, height: 320, marginTop: 150}}
                    src={require('../../images/Screenshot 2022-02-20 013059.png')}
                />
              </div>

            </Col>
          </Row>
        </div>
        <div className="exp3">
          <Row>
            <Col span={10}>
              <div className="test2">
                <Image
                    preview={false}
                    style={{marginLeft: 100, width: 320, height: 320, marginTop: 150}}
                    src={require('../../images/Screenshot 2022-02-20 013059.png')}
                />
              </div>

            </Col>
            <Col span={10} offset={3}>
              <div className="hero-title4">
                <div className="row">
                  <h1 style={{color: "#BA1C1D", fontWeight: "bold", marginTop: 50}}>Risks</h1>
                  <h2>Consider only if you are bullish on NFTs and Looksrare in long term.</h2>
                  <h4>Risks:</h4>
                  <h2 style={{marginTop: 30}}>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    />Mint funds: Will be in $Looks token, this subjects to market volatility<br/>
                    <Image
                        preview={false}
                        style={{marginRight: 20, width: 15, height: 15}}
                        src={require('../../images/Rectangle 47.png')}
                    />
                    Rewards: in wETH which will be used to acquire NFTs, Looksrare fails
                    </h2>
                    <h2>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and rewards become negligible.<br/>



                  </h2>
                  <Row>
                    <Col span={10}>
                      <div className="button3">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>
                    <Col span={10}>
                      <div className="button2">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>

                  </Row>

                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className="exp">
          <Row>
            <Col span={11}  >
              <div className="hero-title8">
                <div className="row">
                  <h1 style={{color: "black", fontWeight: "bold", marginTop: 50}}>Withdrawing from DAO
                  </h1>
                  <h2>Our main goal is to make DAO successful in long term and also give an option of getting back the looks token initially used for membership.<br/>
                    Refunds can be requested after 1 year from the purchase/mint of Looks DAO membership. Once you have requested withdrawal you will get back 80% of your looks invested, which would be 800 looks token.
                  </h2>
                  <h2>Why 80%?</h2>
                 <h2>Remember, our aim is to make DAO successful. In 1 years time, we expect that LooksDAO treasury compounding the looks token will offset the membership withdrawal.<br/>
                   We strongly urge, that you join only if you believe in the vision and not because you know that majority of your capital is preserved.
                 </h2>
                  <Row>
                    <Col span={10}>
                      <div className="button8">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>
                    <Col span={10}>
                      <div className="button9">
                        <h3>LORUM IPSUM</h3>
                      </div>
                    </Col>

                  </Row>

                </div>
              </div>
            </Col>
            <Col span={10} offset={1}>
              <div className="test8">
                <Image
                    preview={false}
                    style={{marginLeft: 100, width: 320, height: 320, marginTop: 150}}
                    src={require('../../images/Screenshot 2022-02-20 013059.png')}
                />
              </div>

            </Col>


          </Row>
        </div>
        <Row>
          <Col span={16} offset={4}>
            <div style={{backgroundColor:"black",marginTop:50}}>
              <h1 style={{color:"white",fontSize:60,fontWeight:"bold",textAlign:"center"}}>Interested ?</h1>
              <SimpleAccordion/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={13} offset={6}>
            <div className="finale">
              <h1 style={{color:"white",fontSize:60,fontWeight:"bold",textAlign:"center"}}>Interested ?</h1>
          <h2><Image
              preview={false}
              style={{marginRight: 20, width: 15, height: 15}}
              src={require('../../images/Rectangle 47.png')}
          /> If you are interested in the membership, kindly fill-up the form given in the link </h2>
              <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;below with all the details.<br/>
            <Image
                preview={false}
                style={{marginRight: 20, width: 15, height: 15}}
                src={require('../../images/Rectangle 47.png')}
            /> Expected date of launch is early March<br/>
            <Image
                preview={false}
                style={{marginRight: 20, width: 15, height: 15}}
                src={require('../../images/Rectangle 47.png')}
            />
            This form is a token of interest from your side. More details will follow soon.<br/>
          </h2>
<div style={{marginBottom:50}}/>
              <h3 style={{backgroundColor:'#BA1C1D',color:"white",fontSize:40,fontWeight:"bold",width:250,marginLeft:280,textAlign:"center",marginBottom:30}}>Form Link</h3>
            </div>
            <div style={{marginBottom:100}}/>
          </Col>
        </Row>
      </div>


  );
}

export default ContextBody;