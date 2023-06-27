import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";


export default function PostCard({ id, title, description, author }) {
  return (
    <Card sx={{ mb: 3 }} style={{color: '#fff', backgroundColor: '#023a70'}}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 3 }}>{ title }</Typography>
        <Typography>{`Author: ${author}`}</Typography>
        <Typography>{ description }</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Link href={`/post/${id}`}>
          <Button>Learn more</Button>
        </Link>
      </CardActions>
    </Card>
  )
}