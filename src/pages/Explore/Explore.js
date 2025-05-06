import React from "react";
import { useState } from "react";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import ModalExplore from "../../component/layout/Modal/ModalExplore/ModalExplore";
import styles from "./Explore.module.css";

const listOfExplore = [
    {
        id: 1,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/09-robert_lewandowski-1510160605.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 1250,
        commentsCount: 2,
        author: {
          name: "Nguyễn Văn A",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        comments: [
            {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
              {
                id: 10,
                username: "huynguyen",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
                text: "Niceeee video !",
                likes: 32,
                time: "4W",
              },
              {
                id: 11,
                username: "thanhthao",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                text: "ohhhhh my g......",
                likes: 19,
                time: "2W",
              },
        ],
         music: "Name Music - (...)"
      },
      {
        id: 2,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/10-lamine-yamal-1510160606.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        likes: 980,
        commentsCount: 15,
        author: {
          name: "Phạm Thị D",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 3,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/21-frenkie_de_jong-1510160608.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 2100,
        commentsCount: 40,
        author: {
          name: "Lý Minh T",
          avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 4,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/6-gavi_-1510160605.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        likes: 765,
        commentsCount: 12,
        author: {
          name: "Trương Thị H",
          avatar: "https://randomuser.me/api/portraits/women/54.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 5,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/17-casado-1510160607.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 1340,
        commentsCount: 18,
        author: {
          name: "Đinh Ngọc Y",
          avatar: "https://randomuser.me/api/portraits/women/66.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 6,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/8-pedri-1510160605.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        likes: 1150,
        commentsCount: 25,
        author: {
          name: "Nguyễn Hùng S",
          avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 7,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/20-olmo1-1510160608.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 1440,
        commentsCount: 50,
        author: {
          name: "Hoàng Minh K",
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 8,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/16-fermin-1510160607.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        likes: 890,
        commentsCount: 12,
        author: {
          name: "Trần Thị H",
          avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
      {
        id: 9,
        thumbnail: "https://static.bongda24h.vn/medias/original/2024/10/15/11-raphinha-1510160606.jpg",
        postTime: "February 18",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 1780,
        commentsCount: 20,
        author: {
          name: "Phan Thanh S",
          avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        },
        comments: [],
        music: "Name Music - (...)"
      },
];


const Explore = () => {
    const [selectedExplore, setSelectedExplore] = useState(null);

  return (
    <div className={styles.explore}>
      <Sidebar />
      <div className={styles.exploreWrapper}>
      <div className={styles.exploreContainer}>
        <div className={styles.listExplore}>
          {listOfExplore.map((item, index) => {

            return (
                <div onClick={() => setSelectedExplore(item)} className={styles.exploreItem} key={item.id}>
              <img className={styles.imageExplore} src={item.thumbnail} alt="Thumbnail" />
              <div className={styles.overlay}>
                <div className={styles.totalLike}>
                  <div className={styles.iconLike}>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <span className={styles.likes}>{item.likes}</span>
                </div>
                <div className={styles.totalComment}>
                  <div className={styles.iconComment}>
                    <i className="fa-solid fa-comment"></i>
                  </div>
                  <span className={styles.comments}>{item.commentsCount}</span>
                </div>
              </div>
            </div>
            )
            
})}
        </div>
      </div>
        <ModalExplore explore={selectedExplore} onClose={() => setSelectedExplore(null)} />
      </div>
    </div>
  );
};
export default Explore;
