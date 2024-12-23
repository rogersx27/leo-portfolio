import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiEnvelope,
	HiCalendarDays
} from "react-icons/hi2";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter
} from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiGalleryView } from "react-icons/ri";
import { FaHandshake } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { FaUserNinja } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import { BiMessageSquareDots } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";




export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
	chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: IoPersonCircle,
	grid: MdWork,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: FaHome,
	gallery: RiGalleryView,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	handshake: FaHandshake,
	fiverr: TbBrandFiverr,
	instagram: RiInstagramFill,
	user: FaUserNinja,
	subject: MdOutlineSubject,
	message: BiMessageSquareDots,
	search: CiSearch,
	contact: MdContactPhone
};