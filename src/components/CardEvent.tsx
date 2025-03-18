import Link from "next/link";
import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface CardEventProps {
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    thumbnail_url: string;
    eventId: number;
    price: number;
}

const CardEvent: FC<CardEventProps> = ({
    title,
    description,
    start_date,
    end_date,
    location,
    thumbnail_url,
    eventId,
    price
}) => {
    return (
        <Link href={`/${eventId}`}>
            <Card className="group overflow-hidden rounded-lg border-none p-3 shadow-none hover:bg-neutral-100/60">
                <CardHeader className="relative h-[175px] w-full overflow-hidden rounded-lg">
                    <Image 
                    src={thumbnail_url}
                    alt="thumbnail"
                    fill
                    className="rounded-lg object-cover group-hover:rotate-2 group-hover:scale-110 group-hover:transition-all group-hover:duration-500"
                    />
                    <Badge className="absolute bottom-4 right-4 z-40">{location}</Badge>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>
        </Link>
    )
}

export default CardEvent