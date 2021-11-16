import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    head: {
        fontWeight: '800',
    },
    text: {
        fontSize: '0.3rem',
        fontWeight: '700',
    }
});

function WordListCard({ word, lexicalEntries }: any) {

    const classes = useStyle();

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body1" className={classes.head} gutterBottom> {word} </Typography>
                    {lexicalEntries.map((lexicalEntry: any) => {
                        const categoryName = lexicalEntry.lexicalCategory.text;
                        const entries = lexicalEntry.entries;
                        return entries.map((entry: any) => {
                            const sense = entry.senses[0];
                            return <Typography variant="body2" mt={1} className={classes.text} gutterBottom> ({categoryName.toLowerCase()}) {sense.definitions.join()} </Typography>
                        })
                    })}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default WordListCard;
