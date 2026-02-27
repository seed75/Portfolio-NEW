// TODO: 아래 프로젝트 데이터를 본인의 실제 프로젝트로 교체하세요.
// 이미지는 /public/works/ 폴더에 추가하고 image 경로를 업데이트하세요.

export type Category = "UI/UX Design" | "Frontend Development" | "Branding";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category[];
  tags: string[];
  image: string; // /public/works/ 경로
  year: string;
  link?: string; // 라이브 URL (선택)
  github?: string; // GitHub URL (선택)
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "project-saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "데이터 관리와 분석을 위한 SaaS 플랫폼 UI/UX 설계. 복잡한 데이터를 직관적인 인터페이스로 시각화하여 사용자 효율을 높였습니다.",
    category: ["UI/UX Design"],
    tags: ["Web Design", "Design System", "Figma"],
    image: "/works/project-saas-dashboard.jpg", // TODO: 실제 이미지로 교체
    year: "2024",
    featured: true,
  },
  {
    slug: "project-portfolio-web",
    title: "Portfolio Website",
    description:
      "반응형 포트폴리오 웹사이트를 Next.js와 Tailwind CSS로 구현. 성능 최적화와 접근성을 고려하여 제작했습니다.",
    category: ["Frontend Development"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/works/project-portfolio-web.jpg", // TODO: 실제 이미지로 교체
    year: "2024",
    link: "https://your-portfolio.com", // TODO: 실제 URL로 교체
    github: "https://github.com/username/portfolio", // TODO: 실제 URL로 교체
    featured: true,
  },
  {
    slug: "project-brand-identity",
    title: "Brand Identity",
    description:
      "스타트업 브랜드 아이덴티티 구축. 로고 디자인부터 브랜드 가이드라인까지 일관된 시각적 언어를 정립했습니다.",
    category: ["Branding"],
    tags: ["Logo Design", "Brand Guideline", "Figma"],
    image: "/works/project-brand-identity.jpg", // TODO: 실제 이미지로 교체
    year: "2023",
    featured: true,
  },
  {
    slug: "project-mobile-app",
    title: "Mobile App UI",
    description:
      "헬스케어 모바일 앱 UI/UX 설계. 사용자 리서치를 기반으로 직관적인 인터랙션과 접근성 높은 인터페이스를 구현했습니다.",
    category: ["UI/UX Design"],
    tags: ["Mobile", "Prototyping", "User Research"],
    image: "/works/project-mobile-app.jpg", // TODO: 실제 이미지로 교체
    year: "2023",
    featured: false,
  },
  {
    slug: "project-landing-page",
    title: "Landing Page",
    description:
      "제품 런칭을 위한 고전환율 랜딩 페이지 개발. 애니메이션과 인터랙션으로 사용자 경험을 강화했습니다.",
    category: ["Frontend Development"],
    tags: ["React", "Framer Motion", "Responsive"],
    image: "/works/project-landing-page.jpg", // TODO: 실제 이미지로 교체
    year: "2023",
    featured: false,
  },
  {
    slug: "project-design-system",
    title: "Design System",
    description:
      "팀 전체의 디자인 일관성을 위한 컴포넌트 라이브러리 구축. Figma 디자인 토큰과 React 컴포넌트를 연동했습니다.",
    category: ["UI/UX Design", "Frontend Development"],
    tags: ["Design System", "React", "Figma", "TypeScript"],
    image: "/works/project-design-system.jpg", // TODO: 실제 이미지로 교체
    year: "2023",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
