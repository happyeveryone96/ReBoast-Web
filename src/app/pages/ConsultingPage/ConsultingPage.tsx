import React, { useState, useEffect } from 'react';
import Consulting from 'app/components/Consulting/Consulting';
import CONSULTING_DATA from 'app/data/consultingData';
import 'app/pages/ConsultingPage/ConsultingPage.css';
import ConsultingCard from 'app/components/ConsultingCard/ConsultingCard';

interface ConsultingData {
  id: number;
  authorId: number;
  authorName: string;
  authorImage: string;
  title: string;
  body: string;
  createdAt: string;
}

const ConsultingPage = () => {
  const [data, setData] = useState<ConsultingData[] | null>(null);

  useEffect(() => {
    setData(CONSULTING_DATA);
  }, []);

  if (!data) {
    return null;
  }

  return (
    // <div className="home-page">
    //   {data.map((consulting) => (
    //     <Consulting key={consulting.id} consulting={consulting} />
    //   ))}
    // </div>
    <div className="home-page">
      <div className="consulting-container">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a href="#/" target="" className="active nav-link">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={1632}
                title="Try to transmit the HTTP card, maybe it will override the
                multi-byte hard drive!"
                content="Assumenda molestiae laboriosam enim ipsum quaerat enim
                officia vel quo. Earum odit rem natus totam atque cumque.
                Sint dolorem facere non."
                tags={['voluptate', 'rerum', 'ducimus', 'hic']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={1724}
                title="If we quantify the alarm, we can get to the FTP pixel
                through the online SSL interface!"
                content="Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam
                aut cupiditate est facere omnis possimus. Tenetur similique
                nemo illo soluta molestias facere quo. Ipsam totam facilis
                delectus nihil quidem soluta vel est omnis."
                tags={['rerum', 'omnis', 'quae']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={459}
                title="quantifying the microchip wont do anything, we need to index
                the online SQL hard drive!"
                content="Minima soluta sed sed et optio explicabo at distinctio
                repudiandae. Magnam deleniti a ea. Non velit accusamus
                veniam qui. Necessitatibus velit ad aut officiis in officiis
                quasi. Sunt nulla dolores voluptatem esse magnam ut."
                tags={['possimus', 'voluptatem', 'cupiditate']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={284}
                title="Try to generate the TCP bus, maybe it will override the
                neural bandwidth!"
                content="Pariatur ut dolor repellendus dolores ut debitis. Est iusto
                neque dicta voluptatibus quia nulla consequatur. Omnis aut
                sed dolores qui laborum a amet."
                tags={['dicta', 'rerum', 'omnis', 'blanditils']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={278}
                title="Try to bypass the SAS card, maybe it will transmit the solid
                state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
                similique incidunt odio aspernatur aut rem. Architecto est
                eum."
                tags={['dolores', 'aut', 'consectetur', 'ullam']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={278}
                title="Try to bypass the SAS card, maybe it will transmit the solid
                state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
                similique incidunt odio aspernatur aut rem. Architecto est
                eum."
                tags={[
                  'welcome',
                  'implementations',
                  'introduction',
                  'codebaseShow',
                ]}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah"
                date="December 9, 2022"
                like={278}
                title="Try to bypass the SAS card, maybe it will transmit the solid
                state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
                similique incidunt odio aspernatur aut rem. Architecto est
                eum."
                tags={['qui', 'et', 'cupiditate', 'quia']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah"
                date="December 9, 2022"
                like={278}
                title="Try to bypass the SAS card, maybe it will transmit the solid
                state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
                similique incidunt odio aspernatur aut rem. Architecto est
                eum."
                tags={['qui', 'quia', 'deserunt']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah Benešová"
                date="December 9, 2022"
                like={278}
                title="Try to bypass the SAS card, maybe it will transmit the solid
                state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
                similique incidunt odio aspernatur aut rem. Architecto est
                eum."
                tags={['qui', 'quia', 'deserunt', 'ipsum']}
              />{' '}
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah"
                date="December 2, 2022"
                like={123}
                title="Try to bypass the SAS card, maybe it will transmit the solid
              state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
              similique incidunt odio aspernatur aut rem. Architecto est
              eum."
                tags={['qui', 'quia', 'deserunt', 'ipsum', 'welcome']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah"
                date="December 1, 2022"
                like={123}
                title="Try to bypass the SAS card, maybe it will transmit the solid
              state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
              similique incidunt odio aspernatur aut rem. Architecto est
              eum."
                tags={['qui', 'quia', 'deserunt', 'ipsum', 'introduction']}
              />
              <ConsultingCard
                profileImage="https://api.realworld.io/images/demo-avatar.png"
                author="Anah"
                date="December 3, 2022"
                like={123}
                title="Try to bypass the SAS card, maybe it will transmit the solid
              state system!"
                content="Est iste totam accusamus dolorem est. Quis non sit impedit
              similique incidunt odio aspernatur aut rem. Architecto est
              eum."
                tags={['qui', 'quia', 'deserunt', 'ipsum', 'welcome']}
              />
              <nav>
                <ul className="pagination">
                  <li className="page-item active">
                    <a className="page-link" href="">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      8
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      9
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      10
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      11
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      12
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      13
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      14
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      15
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      16
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      17
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      18
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      19
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="">
                      20
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <a className="tag-pill tag-default" href="#/tag/welcome">
                  welcome
                </a>
                <a
                  className="tag-pill tag-default"
                  href="#/tag/implementations"
                >
                  implementations
                </a>
                <a className="tag-pill tag-default" href="#/tag/introduction">
                  introduction
                </a>
                <a className="tag-pill tag-default" href="#/tag/codebaseShow">
                  codebaseShow
                </a>
                <a className="tag-pill tag-default" href="#/tag/ipsum">
                  ipsum
                </a>
                <a className="tag-pill tag-default" href="#/tag/qui">
                  qui
                </a>
                <a className="tag-pill tag-default" href="#/tag/et">
                  et
                </a>
                <a className="tag-pill tag-default" href="#/tag/cupiditate">
                  cupiditate
                </a>
                <a className="tag-pill tag-default" href="#/tag/quia">
                  quia
                </a>
                <a className="tag-pill tag-default" href="#/tag/deserunt">
                  deserunt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
