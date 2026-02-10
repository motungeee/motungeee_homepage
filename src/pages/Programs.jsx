import React from 'react';
import styles from './Programs.module.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: '개인상담',
      description: '1:1로 진행되는 전문 심리상담입니다. 우울, 불안, 대인관계 문제 등 다양한 심리적 어려움을 다룹니다.',
      details: '50분 / 1회',
    },
    {
      id: 2,
      title: '심리검사',
      description: '객관적인 검사 도구를 통해 현재의 심리 상태와 성격 특성을 파악합니다. (종합심리검사, 기질검사 등)',
      details: '소요시간 및 비용 문의',
    },
    {
      id: 3,
      title: '커플상담',
      description: '연인이나 부부 사이의 갈등을 해결하고, 서로를 더 깊이 이해하며 건강한 관계를 맺도록 돕습니다.',
      details: '80분 / 1회',
    },
    {
      id: 4,
      title: '집단상담',
      description: '비슷한 고민을 가진 사람들이 모여 서로의 경험을 나누고 지지하며 성장하는 과정입니다.',
      details: '일정 및 비용 별도 공지',
    },
    {
      id: 5,
      title: '수퍼비전',
      description: '상담 전공생 및 수련생을 대상으로 하는 상담 사례 지도 및 교육입니다.',
      details: '한국상담심리학회 1급 수퍼바이저 진행',
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">상담 프로그램 안내</h2>
        <div className={styles.programList}>
          {programs.map(program => (
            <div key={program.id} className={styles.programCard}>
              <h3 className={styles.programTitle}>{program.title}</h3>
              <p className={styles.programDescription}>{program.description}</p>
              <div className={styles.programDetails}>{program.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
