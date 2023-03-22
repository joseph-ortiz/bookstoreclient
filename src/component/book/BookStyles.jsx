import{styled} from '@mui/system'

let BookContainerStyles =  styled('Box')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
})
let BookFilterStyles =  styled('Box')({
    width: '20%',
    height: '500px'
})
let BookFilterPaperStyles =  styled('Box')({
    width: '100%',
    height: '100%',
})
export {BookContainerStyles,BookFilterStyles,BookFilterPaperStyles}