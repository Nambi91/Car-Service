import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onLogin, showLogin }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h2>{showLogin ? 'Login' : title}</h2>
            {location.pathname === '/' && <Button
                color={showLogin ? 'black' : 'green'}
                text={showLogin ? 'Back to car list' : 'Login to comment'}
                onClick={onLogin}
            />}
        </header>
    )
}

Header.defaultProps = {
    title: 'List of cars'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
