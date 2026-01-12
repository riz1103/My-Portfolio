<template>
    <div class="education-timeline">
        <div v-for="edu in education" :key="edu.course" class="education-card">
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-content">
                <h3 class="course-title">{{edu.course}}</h3>
                <div class="school-info">
                    <i class="fas fa-university"></i>
                    <span class="school-name">{{edu.school_name}}</span>
                </div>
                <div class="year-badge">
                    <i class="fas fa-calendar-alt"></i>
                    <span>{{edu.years}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            education: [
                {
                    school_name: 'COLEGIO DE SAN JUAN DE LETRAN - CALAMBA',
                    course: 'BACHELOR OF SCIENCE COMPUTER ENGINEERING',
                    years: '01/2009',
                },
                {
                    school_name: 'Liceo de Victoria',
                    course: 'Highschool',
                    years: '2000 - 2004',
                },
                {
                    school_name: 'Tomas Daguinsin Elementary School',
                    course: 'Elementary',
                    years: '1994 - 2000',
                }
            ]
        }
    }
}
</script>

<style scoped>
.education-timeline {
    padding: 20px 0;
}

.education-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.education-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.education-icon {
    font-size: 2em;
    color: #2196F3;
    background: rgba(33, 150, 243, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.education-content {
    flex: 1;
}

.course-title {
    color: #333;
    font-size: 1.2em;
    margin: 0 0 10px 0;
    font-weight: 600;
}

.school-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    margin-bottom: 10px;
    
    i {
        color: #2196F3;
        font-size: 1.1em;
    }
}

.school-name {
    font-weight: 500;
}

.year-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(33, 150, 243, 0.1);
    color: #2196F3;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9em;
    
    i {
        font-size: 0.9em;
    }
}

@media (max-width: 768px) {
    .education-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .school-info {
        justify-content: center;
    }
}

/* Optional: Add a decorative line connecting education cards */
.education-timeline {
    position: relative;
}

.education-timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(33, 150, 243, 0.2);
    z-index: 0;
}

.education-card {
    position: relative;
    z-index: 1;
    background: white;
}
</style>