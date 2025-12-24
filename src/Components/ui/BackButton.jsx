import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/Components/ui/button'

const BackButton = ({ to, children = "Go back", className = "" }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (to) {
            navigate(to)
        } else {
            navigate(-1)
        }
    }

    return (
        <Button
            variant='ghost'
            className={`group gap-2 ${className}`}
            onClick={handleClick}
        >
            <ArrowLeftIcon className='w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5' />
            {children}
        </Button>
    )
}

export default BackButton
