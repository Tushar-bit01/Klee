import gsap from "gsap";
import Caitlyn from "../assets/Characters/caitx.png"
import Ekko from "../assets/Characters/ekkox.png"
import Jinx from "../assets/Characters/jinxx.png"
import Vi from "../assets/Characters/vix.png"

export function initWidgetSpinner() {
  const widgets = [
    {
      image: Caitlyn,
      name: "Caitlyn",
    },
    {
      image: Ekko,
      name: "Ekko",
    },
    {
      image: "https://i.pinimg.com/1200x/4c/76/62/4c76620bb11597df453f11df5407b7b2.jpg",
      name: "Heimerdinger",
    },
    {
      image: "https://i.pinimg.com/1200x/97/95/05/9795052cc68c0ae0ac4e9a3c55b9ff3c.jpg",
      name: "Jayce",
    },
    {
      image: Jinx,
      name: "Jinx",
    },
    {
      image: "https://i.pinimg.com/736x/02/04/fe/0204febfd4c21165e3ea262f8103da1c.jpg",
      name: "Silco",
    },
    {
      image: Vi,
      name: "Vi",
    },
    {
      image: "https://i.pinimg.com/1200x/a0/76/3a/a0763a4b7200008057787b3b3a91a007.jpg",
      name: "Viktor",
    },
  ];

  const lerp = (a, b, t) => a + (b - a) * t;

  const createSVG = (type, attrs = {}) => {
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", type);
    Object.entries(attrs).forEach(([k, v]) => svgElement.setAttribute(k, v));
    return svgElement;
  };

  let svg, centerX, centerY, outerRadius, innerRadius;
  let currentIndicatorRotation = 0;
  let targetIndicatorRotation = 0;
  let currentSpinnerRotation = 0;
  let targetSpinnerRotation = 0;
  let lastTime = performance.now();
  let lastSegmentIndex = -1;

  const createWidgetSpinner = () => {
    const container = document.querySelector(".widgets");
    
    
    const existingSvg = document.getElementById("widget-svg");
    if (existingSvg) {
      existingSvg.remove();
    }
    
    const viewportSize = Math.min(window.innerWidth, window.innerHeight);
    outerRadius = viewportSize * 0.4;
    innerRadius = viewportSize * 0.25;
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;

    svg = createSVG("svg", { id: "widget-svg" });
    const defs = createSVG("defs");
    svg.appendChild(defs);

    const segmentsGroup = createSVG("g", { id: "segments-group" });

    const anglePerSegment = (2 * Math.PI) / widgets.length;
    for (let i = 0; i < widgets.length; i++) {
      const startAngle = i * anglePerSegment - Math.PI / 2;
      const endAngle = (i + 1) * anglePerSegment - Math.PI / 2;
      const midAngle = (startAngle + endAngle) / 2;

      const clipPath = createSVG("clipPath", { id: `clip-${i}` });
      const path = `M ${centerX + outerRadius * Math.cos(startAngle)} ${
        centerY + outerRadius * Math.sin(startAngle)
      } A ${outerRadius} ${outerRadius} 0 0 1 ${
        centerX + outerRadius * Math.cos(endAngle)
      } ${centerY + outerRadius * Math.sin(endAngle)} L ${
        centerX + innerRadius * Math.cos(endAngle)
      } ${centerY + innerRadius * Math.sin(endAngle)} A ${innerRadius} ${innerRadius} 0 0 0 ${
        centerX + innerRadius * Math.cos(startAngle)
      } ${centerY + innerRadius * Math.sin(startAngle)} Z`;

      clipPath.appendChild(createSVG("path", { d: path }));
      defs.appendChild(clipPath);

      const g = createSVG("g", {
        "clip-path": `url(#clip-${i})`,
        "data-segment": i,
      });

      const segmentRadius = (innerRadius + outerRadius) / 2;
      const segmentX = centerX + Math.cos(midAngle) * segmentRadius;
      const segmentY = centerY + Math.sin(midAngle) * segmentRadius;

      const arcLength = outerRadius * anglePerSegment;
      const imgWidth = arcLength * 1.25;
      const imgHeight = (outerRadius - innerRadius) * 1.25;
      const rotation = (midAngle * 180) / Math.PI + 90;

      const image = createSVG("image", {
        href: widgets[i].image,
        width: imgWidth,
        height: imgHeight,
        x: segmentX - imgWidth / 2,
        y: segmentY - imgHeight / 2,
        preserveAspectRatio: "xMidYMid slice",
        transform: `rotate(${rotation} ${segmentX} ${segmentY})`,
        style: "pointer-events: none;",
      });
      g.appendChild(image);
      segmentsGroup.appendChild(g);
    }
    svg.appendChild(segmentsGroup);
    
    
    const indicator = createSVG("line", {
      id: "widget-indicator",
      x1: centerX,
      y1: centerY - innerRadius * 0.85,
      x2: centerX,
      y2: centerY - outerRadius * 1.05,
    });
    svg.appendChild(indicator);
    
    container.appendChild(svg);
    
    if (svg) svg.style.cursor = "grab";
  };
  
  createWidgetSpinner();

  const updateContent = () => {
    const relativeRotation =
      (((currentIndicatorRotation - currentSpinnerRotation) % 360) + 360) % 360;
    const anglePerSegment = 360 / widgets.length;
    const segmentIndex = Math.floor(relativeRotation / anglePerSegment) % widgets.length;
    if (segmentIndex !== lastSegmentIndex) {
      lastSegmentIndex = segmentIndex;
  
      const titleElement = document.querySelector(".widget-title");
      if (titleElement) {
        titleElement.textContent = widgets[segmentIndex].name;
      }
  
      const previewContainer = document.querySelector(".widget-preview-img");
      if (previewContainer) {
        const img = document.createElement("img");
  
        img.src = widgets[segmentIndex].image;
        img.alt = widgets[segmentIndex].name;
  
        gsap.set(img, { opacity: 0 });
        previewContainer.appendChild(img);
  
        gsap.to(img, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        });
  
        const allImages = previewContainer.querySelectorAll("img");
  
        if (allImages.length > 3) {
          for (let i = 0; i < allImages.length - 3; i++) {
            previewContainer.removeChild(allImages[i]);
          }
        }
      }
    }
  };
  
  const animate = () => {
    const currentTime = performance.now();
    let deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    deltaTime = Math.min(deltaTime, 0.1);

    targetIndicatorRotation += 18 * deltaTime;
    targetSpinnerRotation -= 18 * 0.25 * deltaTime;

    currentIndicatorRotation = lerp(currentIndicatorRotation, targetIndicatorRotation, 0.1);
    currentSpinnerRotation = lerp(currentSpinnerRotation, targetSpinnerRotation, 0.1);
    
    const segmentsGroup = svg?.querySelector("#segments-group");
    if (segmentsGroup) {
      segmentsGroup.setAttribute(
        "transform",
        `rotate(${currentSpinnerRotation % 360} ${centerX} ${centerY})`
      );
    }
    
   
    const indicator = svg?.querySelector("#widget-indicator");
    if (indicator) {
      indicator.setAttribute(
        "transform",
        `rotate(${currentIndicatorRotation % 360} ${centerX} ${centerY})`
      );
    }

    updateContent();

    requestAnimationFrame(animate);
  };

  animate();

 
  let isDragging = false;
  let startY = 0;
  let startRotation = 0;

  const handleMouseDown = (e) => {
   
    if (!e.target.closest("#widget-svg")) return;
    
    isDragging = true;
    startY = e.clientY;
    startRotation = targetIndicatorRotation;
    if (svg) svg.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaY = e.clientY - startY;
      const rotationChange = deltaY * 0.5;
      targetIndicatorRotation = startRotation + rotationChange;
      targetSpinnerRotation = startRotation - rotationChange * 0.25;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      isDragging = false;
      if (svg) svg.style.cursor = "grab";
    }
  };

  const handleTouchStart = (e) => {
   
    if (!e.target.closest("#widget-svg")) return;
    
    isDragging = true;
    startY = e.touches[0].clientY;
    startRotation = targetIndicatorRotation;
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaY = e.touches[0].clientY - startY;
      const rotationChange = deltaY * 0.5;
      targetIndicatorRotation = startRotation + rotationChange;
      targetSpinnerRotation = startRotation - rotationChange * 0.25;
    }
  };

  const handleTouchEnd = () => {
    isDragging = false;
  };

  
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

  document.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchmove", handleTouchMove);
  document.addEventListener("touchend", handleTouchEnd);

  window.addEventListener("resize", () => {
    lastSegmentIndex = -1;
    createWidgetSpinner();
  });
}