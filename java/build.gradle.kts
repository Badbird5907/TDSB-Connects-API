plugins {
    id("java")
    id("maven-publish")
    id("signing")
    id("io.freefair.lombok") version "6.6"
    //id("com.github.johnrengelman.shadow") version "7.1.2" // TODO - make shadowjar work
}

group = "dev.badbird"
version = "0.0.3-DEV"
description = "TDSB Connects API Wrapper"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.1")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.8.1")

    implementation("com.google.code.gson:gson:2.9.1")
    implementation("com.squareup.okhttp3:okhttp:4.10.0")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}
sourceSets {
    getByName("test") {
        java.srcDir("src/main/test")
    }
}
val nexusUsername: String by project
val nexusPassword: String by project
val sourcesJar = tasks.register("sourcesJar", Jar::class.java) {
    classifier = "sources"
    from(sourceSets.main.get().allSource)
}
val javadocJar = tasks.register("javadocJar", Jar::class.java) {
    classifier = "javadoc"
    from(sourceSets.main.get().allJava)
}

apply(plugin = "java")
apply(plugin = "maven-publish")
apply(plugin = "signing")

publishing {
    repositories {
        maven {
            mavenLocal()
            val releasesRepoUrl = "https://s01.oss.sonatype.org/service/local/staging/deploy/maven2"
            val snapshotsRepoUrl = "https://oss.sonatype.org/content/repositories/snapshots/"
            //url = version.endsWith('SNAPSHOT') ? snapshotsRepoUrl : releasesRepoUrl
            setUrl(releasesRepoUrl)
            credentials {
                username = nexusUsername
                password = nexusPassword
            }
        }
    }
    publications {
        create<MavenPublication>("mavenJava") {
            pom {
                name.set("TDSBConnectsAPI")
                description.set("TDSB Connects API Wrapper")
                url.set("https://github.com/Badbird5907/TDSB-Connects-API")
                from(components["java"])
                artifact(sourcesJar)
                artifact(javadocJar)
                scm {
                    url.set("https://github.com/Badbird5907/TDSB-Connects-API.git")
                }

                licenses {
                    license {
                        name.set("MIT License")
                        url.set("https://opensource.org/licenses/MIT/")
                        distribution.set("repo")
                    }
                }

                developers {
                    developer {
                        id.set("Badbird5907")
                        name.set("Badbird5907")
                        email.set("contact@badbird.dev")
                    }
                }
            }
        }
    }
}
signing {
    sign(publishing.publications["mavenJava"])
}
tasks {
    artifacts {
        archives(javadocJar)
        archives(sourcesJar)
    }
    jar {
        duplicatesStrategy = DuplicatesStrategy.EXCLUDE
        //from({
        //    configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) }
        //})
    }
}
//tasks.getByName("jar").dependsOn(tasks.getByName("shadowJar"))
//tasks.getByName("test").onlyIf { tasks.getByName("test").hasProperty("test") }
