import { SocialIcon } from 'react-social-icons'
import PropTypes from 'prop-types'

const RoundedIcon = (props: {
    url: string,
    title?: string,
    bgColor?: string,
    fgColor?: string
}) => {
    return (
        <SocialIcon className='mx-4 hover:-translate-y-1 transition-all ease-in-out duration-300' {...props} />
    )
}

RoundedIcon.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
}
export default RoundedIcon