import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/reactfontawesome";
import {
 faHeart,
 faReplyAll,
 faChevronDown,
 faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../../hooks/
useWindowDimensions";
import { gql, useMutation } from "@apollo/client";
const UpdateThreadPoint = gql`
 mutation UpdateThreadPoint(
 $userId: ID!
 $threadId: ID!
 $increment: Boolean!
 ) {
 updateThreadPoint(
 userId: $userId
 threadId: $threadId
 increment: $increment
 )
 }
`;

export class ThreadPointsBarProps {
 points: number = 0;
 responseCount?: number;
 userId?: string;
 threadId?: string;
 allowUpdatePoints?: boolean = false;
 refreshThread?: () => void;
}

const ThreadPointsBar: FC<ThreadPointsBarProps> = ({
 points,
 responseCount,
 userId,
 threadId,
 allowUpdatePoints,
 refreshThread,
}) => {
 const { width } = useWindowDimensions();
 const [execUpdateThreadPoint] =
useMutation(UpdateThreadPoint);