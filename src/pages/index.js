import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/barclays.png'
import thumb02 from '../assets/images/thumbs/jpmc.jpg'
import thumb03 from '../assets/images/thumbs/cybg.jpg'
import thumb04 from '../assets/images/thumbs/iomart.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Barlcays | 2019-present: Assistant VP',
    description: 'Developer Experience & Cloud Toolchain Engineer',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'JPMC | 2017-2019: Associate',
    description: 'Cloud development & CI-CD',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'CYBG | 2014-2017: Technical Specialist',
    description: 'Sysadmin & Microservice Development',
  },
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'Iomart | 2012-2014: Systems Engineer',
    description: 'Cloud Sysadmin & NOC Engineering',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Callum Fay - portfolio'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Current proficiences listed below:</h2>
            </header>
            <table>
              <tbody>
                <tr>
                  <td class="underline">
                    &nbsp;Cloud (on/off prem)
                  </td>
                  <td>&nbsp;AWS</td>
                  <td>&nbsp;GKP&nbsp;</td>
                  <td>&nbsp;AZURE</td>
                  <td>&nbsp;K8s</td>
                  <td>&nbsp;DCOS</td>
                  <td>&nbsp;Openshift</td>
                </tr>
                <tr>
                  <td>
                    &nbsp;Languages
                  </td>
                  <td>&nbsp;Python 2.7/3+&nbsp;</td>
                  <td>&nbsp;Golang</td>
                  <td>&nbsp;NodeJS</td>
                  <td>&nbsp;Groovy</td>
                  <td>&nbsp;Java 7/8&nbsp;</td>
                  <td>&nbsp;ReactJS&nbsp;&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    &nbsp;Toolsets/Stacks
                  </td>
                  <td>&nbsp;ELK</td>
                  <td>&nbsp;TICK&nbsp;</td>
                  <td>&nbsp;Prometheus</td>
                </tr>
                <tr>
                  <td>
                    &nbsp;IAC/CI-CD Tools
                  </td>
                  <td>&nbsp;Ansible</td>
                  <td>&nbsp;Puppet&nbsp;</td>
                  <td>&nbsp;Chef</td>
                  <td>&nbsp;Jenkins</td>
                  <td>&nbsp;GoCD</td>
                  <td>&nbsp;Docker</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="two">
            <h2>Work history</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, thumbnail, caption, description }) => ({
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
