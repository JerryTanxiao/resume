(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=new IntersectionObserver(i=>{i.forEach((n,o)=>{n.isIntersecting&&setTimeout(()=>{n.target.classList.add("visible")},o*100)})},{threshold:.1});document.querySelectorAll(".section, .glass-card, .timeline-item").forEach(i=>{i.style.opacity="0",i.style.transform="translateY(30px)",i.style.transition="all 1s cubic-bezier(0.19, 1, 0.22, 1)",c.observe(i)});const r=document.querySelector(".cursor-blob");let l=0,d=0,e=0,t=0;document.addEventListener("mousemove",i=>{l=i.clientX,d=i.clientY});function s(){e+=(l-e)*.1,t+=(d-t)*.1,r&&(r.style.transform=`translate(${e-200}px, ${t-200}px)`),requestAnimationFrame(s)}s();const a=document.getElementById("project-modal"),p=document.getElementById("modal-body"),u=document.querySelector(".close-modal"),y={ddms:{title:"DDMS 智能配送管理 SaaS (2.0 AI版)",desc:"面向同城即时配送的多租户 SaaS 平台，日订单 10w+。集成智能调度算法与 AI 需求预测。",tech:["Java 21","Spring Cloud","Netty","RocketMQ","Python FastAPI"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>智能调度引擎</h4>
                        <p>基于核心「时间顺路度 + 空间夹角」模型，通过 AI 需求预测动态调整派单权重，骑手满意度提升 40%。</p>
                    </div>
                    <div class="detail-item">
                        <h4>高并发网关</h4>
                        <p>Netty + Protobuf 实现骑手位置每秒 10w+ 级接入，轨迹压缩率达 70%。</p>
                    </div>
                    <div class="detail-item">
                        <h4>流程编排</h4>
                        <p>LiteFlow 动态编排业务审批流，实现 0 停机业务规则热更新。</p>
                    </div>
                </div>
            `},kkb:{title:"话费权益订单风控系统",desc:"主导 KKB 万级话费权限代充全链路风控治理。",tech:["Risk Level Engine","Redis","Fegin","Seata","SkyWalking"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>动态风控</h4>
                        <p>实现基于交易习惯、成功率、假充率的 5 级风控评定，动态分配信用额度。</p>
                    </div>
                    <div class="detail-item">
                        <h4>自动化处罚</h4>
                        <p>风控预警触发后，秒级联动权限中心锁定账号、限制提现、踢出登录。</p>
                    </div>
                </div>
            `},dow:{title:"供应链 AI 赋能中心 (DOW)",desc:"利用 Dify + RAG 架构落地 AI Agent 提效供应链决策。",tech:["Dify","Milvus","LLM","Python"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>AI 智能运维</h4>
                        <p>实现自然语言发布 K8s 应用，智能预警供应波动。</p>
                    </div>
                    <div class="detail-item">
                        <h4>研效提升</h4>
                        <p>沉淀业务私有知识库，通过 Agent 辅助研发流程，能效提升 30%。</p>
                    </div>
                </div>
            `},zhongtai:{title:"深能环保数智中台",desc:"集团级数据治理基石，协同阿里团队交付。",tech:["Flink","DataWorks","MySQL 8.0","DolphinScheduler"],details:`
                <div class="modal-detail-grid">
                    <div class="detail-item">
                        <h4>查询调优</h4>
                        <p>攻克 MySQL 8.0 索引下推难题，将集团核心报表从 300s 优化至 1s。</p>
                    </div>
                    <div class="detail-item">
                        <h4>实时计算</h4>
                        <p>主导 Flink 流批一体算力调优，支撑千万级数据维度毫秒级反向定位。</p>
                    </div>
                </div>
            `}};document.querySelectorAll(".project-card").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-project"),o=y[n];o&&(p.innerHTML=`
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${o.title}</h2>
                <div class="modal-tech-stack" style="margin-bottom: 2rem;">
                    ${o.tech.map(h=>`<span class="badge" style="margin-right: 0.5rem; margin-bottom: 0.5rem;">${h}</span>`).join("")}
                </div>
                <p style="font-size: 1.1rem; margin-bottom: 2rem;">${o.desc}</p>
                <hr style="border: none; border-top: 1px solid var(--border-color); margin-bottom: 2rem;">
                ${o.details}
            `,a.style.display="block",document.body.style.overflow="hidden")})}),u.onclick=()=>{a.style.display="none",document.body.style.overflow="auto"},window.onclick=i=>{i.target===a&&(a.style.display="none",document.body.style.overflow="auto")};const m=document.createElement("style");m.innerHTML=`
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .modal-detail-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        .detail-item h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .detail-item p {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
    `,document.head.appendChild(m)});
