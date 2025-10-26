import "./About.css";
import OptimizedImage from "./OptimizedImage";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame">
            {/* Decorative elements */}
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
            <div className="decorative-dot dot-3"></div>

            {/* Your actual photo */}
            <OptimizedImage
              src="/dieuanhcv/assets/images/about/about.jpg"
              alt="About Dieuanh"
              className="about-photo"
              loading="lazy"
            />
            {/* If using src/dieuanhcv/assets:
            <img 
              src={aboutImage} 
              alt="About Dieuanh" 
              className="about-photo"
            />
            */}

            {/* Decorative border accent */}
            <div className="border-accent"></div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title">Về bản thân</h2>
          <p className="about-text">
            Tôi là một nhà nghiên cứu khoa học với hơn 2 năm kinh nghiệm trong
            lĩnh vực nghiên cứu và phát triển. Niềm đam mê của tôi là khám phá
            những kiến thức mới và áp dụng phương pháp khoa học để giải quyết
            các vấn đề phức tạp.
          </p>
          <p className="about-text">
            Với nền tảng vững chắc về phương pháp nghiên cứu, phân tích dữ liệu
            và tư duy phản biện, tôi luôn hướng tới việc tạo ra những đóng góp
            có ý nghĩa cho cộng đồng khoa học và xã hội.
          </p>
          <p className="about-text">
            Tôi tin rằng khoa học không chỉ là lý trí mà còn là niềm đam mê và
            sự kiên trì trong việc theo đuổi sự thật.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Năm kinh nghiệm</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Dự án nghiên cứu</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Bài báo công bố</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
